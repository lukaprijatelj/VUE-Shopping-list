<template>
    <div>
        <h1>Shopping list:</h1>

        <Entry
            v-for="item in allItems"
            v-bind:key="item.id"
            v-bind:modelData="item"
        />
        <AddEntry />
    </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Entry from "./components/Entry.vue";
import AddEntry from "./components/AddEntry.vue";
import store from './store';
import { mapGetters } from 'vuex';

export interface IShoppingEntry {
    index: number;
    message: string;
}

@Options({
    components: {
        Entry,
		AddEntry
    },
    props: {},
})
export default class App extends Vue {
    public items: Array<IShoppingEntry> = [];

    /**
     * DON'T USE CONSTRUCTOR. Instead use created() method, because it is part of VueJS lifecycle.
     */
    public created() {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                let items = data.shoppingList.map(
                    (entry: string, index: number) => ({
                        message: entry,
                        index: index,
                    })
                );
				store.commit('updateItems', items);
            });
    }

	computed = 
	{
		allItems() 
		{
        	return store.state.allItems();
		}
	}

    // Lifecycle hooks
    public mounted() {}
    public updated() {}
    public destroyed() {}
}
</script>



<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}
</style>
