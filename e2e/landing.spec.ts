import {
  CALL_TO_ACTION,
  HIGHLIGHTED_FEATURES,
  INTRODUCTION_TEXT,
  WHAT_IS
} from '../src/app/(home)/constants'
import { PROJECT_NAME } from '../src/utils/constants'
import { test, expect } from '@playwright/test'

test('has product name as a title', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByRole('heading', { name: PROJECT_NAME, exact: true })).toBeVisible()
})

test('has expected introduction text', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText(INTRODUCTION_TEXT)).toBeVisible()
})

test('has what is title', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText(WHAT_IS.title)).toBeVisible()
})

test('has expected what is parragraph', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText(WHAT_IS.parragraph)).toBeVisible()
})

test('has highlighted features title', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText(HIGHLIGHTED_FEATURES.title)).toBeVisible()
})

test('has expected list of highlighted features', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const list = page.getByTestId('higilighted-features-ordered-list')
  await expect(list).toBeVisible()

  HIGHLIGHTED_FEATURES.features.forEach(async (feature) => {
    await expect(list.getByText(feature.title)).toBeVisible()
    await expect(list.getByText(feature.description)).toBeVisible()
  })
})

test('has call to action title', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.getByText(CALL_TO_ACTION.title)).toBeVisible()
})

test('has expected call to action links', async ({ page }) => {
  await page.goto('http://localhost:3000')

  const list = page.getByTestId('call-to-action-unordered-list')

  CALL_TO_ACTION.links.forEach(async (link) => {
    const linkEl = list.getByRole('link', { name: link.text })
    await expect(linkEl).toBeVisible()
    await expect(linkEl).toHaveAttribute('href', link.href)
  })
})
