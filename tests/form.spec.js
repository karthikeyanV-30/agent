const { test, expect } = require('../fixtures/base');
const FormPage = require('../pages/FormPage');

test('Fill form and verify success message', async ({ page }) => {
  await test.step('Navigate to form page', async () => {
    await page.goto('/form');
  });

  await test.step('Fill out the form', async () => {
    const formPage = new FormPage(page);
    await formPage.fillForm({
      firstName: 'John',
      lastName: 'Cena',
      jobTitle: 'Engineer',
      experience: '2-4',
      date: '01/01/2020'
    });
  });

  await test.step('Submit the form', async () => {
    const formPage = new FormPage(page);
    await formPage.submit();
  });

  await test.step('Verify success message', async () => {
    await expect(page.getByText('The form was successfully submitted!')).toBeVisible();
  });
});
