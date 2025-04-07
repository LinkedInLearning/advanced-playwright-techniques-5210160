import { test, expect } from "@playwright/test"

test("product name is displayed on page", async ({ page }) => {
	await page.goto("https://practicesoftwaretesting.com")
	const productLink = await page.getByRole("link", { name: "Combination Pliers" })
	await expect(productLink).toBeVisible();
})

test("mocked product name is displayed on page", async ({ page }) => {
	
	const data = {
		current_page: 1,
		data: [
			{
				id: "01JQNG0MS2JVH86TCJ40RC9RWS",
				name: "Long Nose Pliers",
				description:
					"Phasellus consequat fermentum quam id sodales. Curabitur nec dui orci. Fusce id turpis laoreet, lobortis ex non, finibus libero. Vivamus id enim eu nibh placerat maximus. Aenean semper dui a laoreet venenatis. Vestibulum at ligula quam. Donec interdum tristique neque lacinia laoreet. Sed auctor fermentum congue. Integer aliquet vulputate feugiat. Quisque malesuada diam iaculis ornare maximus. Mauris quam massa, sodales at mattis non, consectetur eget magna. Aliquam eget congue metus, sed congue leo. Nam sit amet est id ligula volutpat pharetra non id nisl. Vestibulum ac enim vitae nisi tempus cursus. Aliquam erat volutpat.",
				price: 14.24,
				is_location_offer: false,
				is_rental: false,
				in_stock: false,
				product_image: {
					id: "01JQNG0MR0PMKNPQSGEPD0F0P0",
					by_name: "Brett Jordan",
					by_url: "https://unsplash.com/@brett_jordan",
					source_name: "Unsplash",
					source_url: "https://unsplash.com/photos/GamuDTVm02g",
					file_name: "pliers04.avif",
					title: "Long nose pliers",
				},
				category: {
					id: "01JQNG0MPZ2XJADYWQF1K8T4HQ",
					name: "Pliers",
					slug: "pliers",
					parent_id: "01JQNG0MP5PV1ERDNQ79XXQW7Z",
				},
				brand: {
					id: "01JQNG0MN269VM57NSR619ZYZ3",
					name: "MightyCraft Hardware",
					slug: "mightycraft-hardware",
				},
			},
		],
		from: 1,
		last_page: 5,
		per_page: 9,
		to: 9,
		total: 45,
	};

	await page.route('**/products?between=price,1,100&page=1', route => route.fulfill({
		status: 200,
		contentType: 'application/json',
		body: JSON.stringify(data)
	}))


	await page.goto("https://practicesoftwaretesting.com");
	const productLink = await page.getByRole("link", {
		name: "Long Nose Pliers",
	});
	await expect(productLink).toBeVisible();
})



