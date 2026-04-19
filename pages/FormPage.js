class FormPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
    this.jobTitleInput = page.getByRole('textbox', { name: 'Job title' });
    this.collegeRadio = page.locator('#radio-button-2');
    this.maleCheckbox = page.locator('#checkbox-1');
    this.experienceSelect = page.getByLabel('Years of experience:');
    this.dateInput = page.getByRole('textbox', { name: 'mm/dd/yyyy' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async fillForm(data) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.jobTitleInput.fill(data.jobTitle);
    await this.collegeRadio.click();
    await this.maleCheckbox.click();
    await this.experienceSelect.selectOption(data.experience);
    await this.dateInput.fill(data.date);
  }

  async submit() {
    await this.submitButton.click();
  }
}

module.exports = FormPage;