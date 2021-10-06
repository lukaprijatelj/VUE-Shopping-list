import { shallowMount } from '@vue/test-utils';
import Entry from '@/components/Entry.vue';

describe('./src/components/Entry.vue', () =>
{
	it('is entry with message "Bake a cake" rendered', () =>
	{
		const modelData = 
		{
			message: "Bake a cake",
			index: 0
		};
		const wrapper = shallowMount(Entry, 
		{
			props: { modelData }
		});
		expect(wrapper.text()).toMatch(modelData.message);
	});

	it('is entry with message "Go to fitness" rendered', () =>
	{
		const modelData = 
		{
			message: "Go to fitness",
			index: 1
		};
		const wrapper = shallowMount(Entry, 
		{
			props: { modelData }
		});
		expect(wrapper.text()).toMatch(modelData.message);
	});
})
