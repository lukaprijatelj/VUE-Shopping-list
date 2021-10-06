<template>
    <div class="entry" v-on:mousedown="onMouseDown">
        {{ modelData.message }}
    </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import App from "../App.vue";
import { IShoppingEntry } from "../App.vue";

@Options({
    components: {},
    props: 
	{
        modelData: Object,
    },
})
export default class Entry extends Vue 
{
    public modelData!: Object;

    public onMouseDown() 
	{
        console.log("Entry was clicked");

        let index = (this.modelData as any).index;

        (this.$parent as App).items = (this.$parent as App).items.filter(
            (item: IShoppingEntry) => item.index !== index
        );
    }

    // Lifecycle hooks
    public created() {}
    public mounted() {}
    public updated() {}
    public destroyed() {}
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Entry.css"></style>