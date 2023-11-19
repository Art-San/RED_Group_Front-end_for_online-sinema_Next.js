import { EditorProps, EditorState } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {} // берем дефолтное из реакта ButtonHTMLAttributes<HTMLButtonElement>

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}
// Совмещенный тип (Используем type что бы можно было при плюсовать)
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps // берем из реакта и прибавляем из IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
