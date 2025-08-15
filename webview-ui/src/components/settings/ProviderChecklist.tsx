import { VSCodeCheckbox } from "@vscode/webview-ui-toolkit/react"
import { useExtensionState } from "@/context/ExtensionStateContext"
import { useApiConfigurationHandlers } from "./utils/useApiConfigurationHandlers"
import { PROVIDER_OPTIONS } from "./providers/providerList"
import { ApiProvider } from "@shared/api"

const ProviderChecklist = () => {
	const { apiConfiguration } = useExtensionState()
	const { handleFieldsChange } = useApiConfigurationHandlers()

	const allProviders = PROVIDER_OPTIONS.map((p) => p.value)
	const enabled = apiConfiguration?.enabledApiProviders ?? allProviders

	const toggleProvider = async (provider: ApiProvider, checked: boolean) => {
		const current = enabled
		const updated = checked ? Array.from(new Set([...current, provider])) : current.filter((p) => p !== provider)

		const updates: any = { enabledApiProviders: updated }
		const fallback = updated[0]
		if (!checked) {
			if (apiConfiguration?.planModeApiProvider === provider) {
				updates.planModeApiProvider = fallback
			}
			if (apiConfiguration?.actModeApiProvider === provider) {
				updates.actModeApiProvider = fallback
			}
		}

		await handleFieldsChange(updates)
	}

	return (
		<div className="flex flex-col gap-1 mb-3">
			<span style={{ fontWeight: 500 }}>Enabled Providers</span>
			{PROVIDER_OPTIONS.map((opt) => (
				<VSCodeCheckbox
					key={opt.value}
					checked={enabled.includes(opt.value)}
					onChange={(e: any) => toggleProvider(opt.value, e.target.checked === true)}>
					{opt.label}
				</VSCodeCheckbox>
			))}
		</div>
	)
}

export default ProviderChecklist
