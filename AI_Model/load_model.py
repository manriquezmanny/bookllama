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
print("Using GPU") if torch.cuda.is_available() else print("\nNo GPU detected. Defaulting to CPU\n")

# Input text
input_text = "Briefly reccomend a fantasy book to read."

# Tokenize input
inputs = tokenizer(input_text, return_tensors="pt").to(device)

# Starting timer and generating response
print("Generating a response...")
start_time = time.time()
# Generate response
with torch.no_grad():
    outputs = model.generate(**inputs, max_length=100)  # Reduced max_length for testing

# Ending timer and calculated elapsed time
end_time = time.time()
elapsed_time = end_time - start_time

print("Decoding and printing response...\n")
# Decode and print response
response = tokenizer.decode(outputs[0, len(inputs[0]):], skip_special_tokens=True)
print(f"Input: {input_text}\n\nResponse: {response}\n\nOperation Time: {elapsed_time} seconds.")

