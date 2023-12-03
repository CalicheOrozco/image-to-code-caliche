'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Form = ({ transformUrlToCode }: { transformUrlToCode: (url: string) => void }) => {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(e) => {
				e.preventDefault()
				const form = e.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement
				transformUrlToCode(url.value)
			}}
		>
			<Label htmlFor="url">Introduce the URL of your image</Label>
			<Input name="url" id="url" type="url" placeholder="https://your-screenshot/image.jpg" />
			<Button>Generate code from the image</Button>
		</form>
	)
}
