export default abstract class AbstractView {
  private _element: HTMLElement;

  abstract get template(): string

  get element(): HTMLElement {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  private render(): HTMLElement {
    const wrapper = document.createElement(`div`);
    wrapper.innerHTML = this.template.trim();
    return wrapper;
  }

  bind(element: HTMLElement): void {
    // bind handlers if required
  }
}
