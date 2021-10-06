<template>
    <div>
        <h1>Shopping list:</h1>

        <Entry
            v-for="item in items"
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

export interface IShoppingEntry 
{
    index: number;
    message: string;
}

@Options({
    components: 
	{
        Entry,
		AddEntry
    },
    props: {},
})
export default class App extends Vue 
{
    public items: Array<IShoppingEntry> = [];

    /**
     * DON'T USE CONSTRUCTOR. Instead use created() method, because it is part of VueJS lifecycle.
     */
    public created() 
	{
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                this.items = data.shoppingList.map(
                    (entry: string, index: number) => ({
                        message: entry,
                        index: index,
                    })
                );
            });
    }

    // Lifecycle hooks
    public mounted() {}
    public updated() {}
    public destroyed() {}
}
</script>


<!-- This will import the CSS globally -->
<style scoped lang="css">
  	@import "./App.css";
</style>