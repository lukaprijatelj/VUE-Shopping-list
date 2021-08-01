import { createStore } from 'vuex'

export default createStore({
	state:
	{
		items: []
	},
	mutations: 
	{
		updateItems(state, items)
		{
			state.items = items;
		}
	},
	actions: 
	{

	},
	modules: 
	{

	},
	getters: 
	{
		allItems(state) 
		{
		  	return state.items;
		}
	}
})
