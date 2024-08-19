import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
import time

# Load tokenizer
tokenizer = AutoTokenizer.from_pretrained("./tokenizer")
print("Loaded tokenizer")

# Load model
print("Loading Model")
model = AutoModelForCausalLM.from_pretrained("./model", return_dict=True)

# Set model to evaluation mode and move to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
model.eval()

# Printing if GPU is available
print("Using GPU") if torch.cuda.is_available() else print("No GPU detected.")

# Input text
input_text = "Recommend a good medieval fantasy book, keep your response brief."

# Tokenize input
inputs = tokenizer(input_text, return_tensors="pt").to(device)

# Starting timer and generating response
print("Generating a response...")
start_time = time.time()
# Generate response
with torch.no_grad():
    outputs = model.generate(**inputs, max_length=200)  # Reduced max_length for testing

# Ending timer and calculated elapsed time
end_time = time.time()
elapsed_time = end_time - start_time

print("Decoding and printing response...")
# Decode and print response
response = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(f"Input: \n{input_text} \n Response: \n{response} \n\n Operation Time: {elapsed_time} seconds.")

