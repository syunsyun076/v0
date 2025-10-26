import { GenerateForm } from "@/components/generate-form"
import { PreviewPanel } from "@/components/preview-panel"

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8">
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <GenerateForm />
        <PreviewPanel />
      </div>
    </div>
  )
}
