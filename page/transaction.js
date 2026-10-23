import { expect } from "@playwright/test";

export class registrationpage {
  constructor(page) {
    this.page = page;
    this.firstname = page.locator(
      `//tr[td[contains(., 'First Name:')]]//input[@type='text']`,
    );
}
}