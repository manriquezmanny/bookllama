import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

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

# Input text
input_text = "Recommend a good medieval fantasy book, keep your response brief."

# Tokenize input
inputs = tokenizer(input_text, return_tensors="pt").to(device)

print("Generating a response...")
# Generate response
with torch.no_grad():
    outputs = model.generate(**inputs, max_length=200)  # Reduced max_length for testing

print("Decoding and printing response...")
# Decode and print response
response = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(response)

