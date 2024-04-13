const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    const paragraph = await page.$('p');
    const text = await paragraph.textContent();
    expect(text).toContain('Cookbook: ');  
  });
  