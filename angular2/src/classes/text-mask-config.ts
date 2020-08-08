export interface TextMaskConfig {
    /**
     * Array or function that defines how the user input is going to be masked.
     */
    mask!: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false

    /**
     * Boolean that tells the component whether to be in *guide* or *no guide* mode.
     */
    guide?: boolean

    /**
     * The placeholder character represents the fillable spot in the mask.
     * The default placeholder character is underscore, `_`.
     */
    placeholderChar?: string

    /**
     * You can provide a pipe function that will give you the opportunity to modify the conformed value before it is displayed on the screen.
     * The pipe function receives:
     *   - conformedValue
     *   - config
     */
    pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | object

    /**
     * Changes the general behavior of the Text Mask component.
     *
     * Default: `false`
     */
    keepCharPositions?: boolean

    /**
     * Boolean that tells the Text Mask component to display the mask as a placeholder in place of the regular placeholder
     * when the input element value is empty.
     */
    showMask?: boolean
}