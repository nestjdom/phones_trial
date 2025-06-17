import { test, expect } from '@playwright/experimental-ct-react';
import PhoneCard from './PhoneCard';
import { mockPhones } from '@/data/mocks';

const mockPhone = mockPhones[0];

test('should render link, image, name and price', async ({ mount }) => {
  const component = await mount(<PhoneCard phone={mockPhone} />);
  await expect(component).toHaveRole('link');
  await expect(component.getByRole('img')).toBeVisible();
  await expect(component.getByRole('heading', { name: mockPhone.name })).toBeVisible();
  await expect(component.getByText(new RegExp(mockPhone.basePrice.toString()))).toBeVisible();
});