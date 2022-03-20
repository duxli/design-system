import grey from '../theme/colors/grey';

const tag: 'duxli-button' = 'duxli-button';

type DuxliButtonVariant = 'outlined' | 'filled' | 'minimal';

const css = `
:host {
  padding: 0;
  box-sizing: border-box;
}

:host > button {
  cursor: pointer;
}

:host[variant=filled] > button, :host > button {
  background-color: ${grey['200']};
  border: none;
}

:host[variant=filled] > button:hover, :host > button:hover {
  background-color: ${grey['300']};
  border: none;

}

:host[variant=outlined] > button {
  
}

:host[variant=minimal] > button {

}
`;

/**
 *
 */
class DuxliButton extends HTMLElement implements HTMLButtonElement {
  // Not actually private
  private readonly wrapped: HTMLButtonElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = css;

    const button = document.createElement('button');
    this.wrapped = button;

    const slot = document.createElement('slot');

    button.appendChild(slot);

    shadow.appendChild(style);
    shadow.appendChild(button);
  }

  get disabled(): boolean {
    return this.wrapped.disabled;
  }

  set disabled(value: boolean) {
    this.wrapped.disabled = value;
  }

  get form(): HTMLFormElement | null {
    return this.wrapped.form;
  }

  get formAction(): string {
    return this.wrapped.formAction;
  }

  set formAction(value: string) {
    this.wrapped.formAction = value;
  }

  get formEnctype(): string {
    return this.wrapped.formEnctype;
  }

  set formEnctype(value: string) {
    this.wrapped.formEnctype = value;
  }

  get formMethod(): string {
    return this.wrapped.formMethod;
  }

  set formMethod(value: string) {
    this.wrapped.formMethod = value;
  }

  get formNoValidate(): boolean {
    return this.wrapped.formNoValidate;
  }

  set formNoValidate(value: boolean) {
    this.wrapped.formNoValidate = value;
  }

  get formTarget(): string {
    return this.wrapped.formTarget;
  }

  set formTarget(value: string) {
    this.wrapped.formTarget = value;
  }

  get labels(): NodeListOf<HTMLLabelElement> {
    return this.wrapped.labels;
  }

  get name(): string {
    return this.wrapped.name;
  }

  set name(value: string) {
    this.wrapped.name = value;
  }

  get type(): string {
    return this.wrapped.type;
  }

  set type(value: string) {
    this.wrapped.type = value;
  }

  get validationMessage(): string {
    return this.wrapped.validationMessage;
  }

  get validity(): ValidityState {
    return this.wrapped.validity;
  }

  get value(): string {
    return this.wrapped.type;
  }

  set value(value: string) {
    this.wrapped.value = value;
  }

  get willValidate(): boolean {
    return this.wrapped.willValidate;
  }

  checkValidity(): boolean {
    return this.wrapped.checkValidity();
  }

  reportValidity(): boolean {
    return this.wrapped.reportValidity();
  }

  setCustomValidity(error: string): void {
    this.wrapped.setCustomValidity(error);
  }

  get variant(): DuxliButtonVariant {
    return this.getAttribute('variant') as DuxliButtonVariant;
  }

  set variant(value: DuxliButtonVariant) {
    this.setAttribute('variant', value);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(`Attribute '${name}' changed from '${oldValue}' to '${newValue}'`);
  }

  static get observedAttributes() {
    return ['variant'];
  }
}

customElements.define(tag, DuxliButton);
