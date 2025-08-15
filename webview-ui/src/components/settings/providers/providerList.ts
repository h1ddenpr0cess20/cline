import { ApiProvider } from "@shared/api"

export interface ProviderOption {
	value: ApiProvider
	label: string
}

export const PROVIDER_OPTIONS: ProviderOption[] = [
	{ value: "cline", label: "Cline" },
	{ value: "openrouter", label: "OpenRouter" },
	{ value: "anthropic", label: "Anthropic" },
	{ value: "claude-code", label: "Claude Code" },
	{ value: "bedrock", label: "Amazon Bedrock" },
	{ value: "openai", label: "OpenAI Compatible" },
	{ value: "vertex", label: "GCP Vertex AI" },
	{ value: "gemini", label: "Google Gemini" },
	{ value: "groq", label: "Groq" },
	{ value: "deepseek", label: "DeepSeek" },
	{ value: "openai-native", label: "OpenAI" },
	{ value: "cerebras", label: "Cerebras" },
	{ value: "baseten", label: "Baseten" },
	{ value: "vscode-lm", label: "VS Code LM API" },
	{ value: "mistral", label: "Mistral" },
	{ value: "requesty", label: "Requesty" },
	{ value: "fireworks", label: "Fireworks" },
	{ value: "together", label: "Together" },
	{ value: "qwen", label: "Alibaba Qwen" },
	{ value: "doubao", label: "Bytedance Doubao" },
	{ value: "lmstudio", label: "LM Studio" },
	{ value: "ollama", label: "Ollama" },
	{ value: "litellm", label: "LiteLLM" },
	{ value: "moonshot", label: "Moonshot" },
	{ value: "huggingface", label: "Hugging Face" },
	{ value: "nebius", label: "Nebius AI Studio" },
	{ value: "asksage", label: "AskSage" },
	{ value: "xai", label: "xAI" },
	{ value: "sambanova", label: "SambaNova" },
	{ value: "sapaicore", label: "SAP AI Core" },
	{ value: "huawei-cloud-maas", label: "Huawei Cloud MaaS" },
]
