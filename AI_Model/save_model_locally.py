# Imports
from transformers import AutoTokenizer, AutoModelForCausalLM

# Creating paths to save model and tokenizer to
tokenizer_path = "./tokenizer"
quantized_model_path = "./model"

# Loading the tokenizer and model
print("Loading tokenizer...")
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-chat-hf")
print("Loading Model...")
# Loading the model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-chat-hf")

# Moving the model to the CPU which is where we want it for quantization and for optimizing it for deployment
model.to("cpu")

# Saving the quantized model and tokenizer to local directory
print("Saving Model...")
model.save_pretrained(quantized_model_path)
print("Saving Tokenizer...")
tokenizer.save_pretrained(tokenizer_path)
print("Saved model and tokenizer")