<template>
    <input
        class="add-entry"
        v-model="text"
        v-on:mousedown="onMouseDown"
        placeholder="Add new item..."
        v-on:keyup.enter="onEnter"
    />
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";
import App from "../App.vue";

@Options({
    components: {},
    props: {},
})
export default class AddEntry extends Vue {
    public text: string = "";

    public onMouseDown() {
        console.log("Entry was clicked");
    }

    public onEnter() {
        console.log("Enter key was clicked");

        let newEntry = {
            index: (this.$parent as App).items.length - 1,
            message: this.text,
        };
        (this.$parent as App).items = [
            ...(this.$parent as App).items,
            newEntry,
        ];

        this.text = "";
    }

    // Lifecycle hooks
    public created() {}
    public mounted() {}
    public updated() {}
    public destroyed() {}
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-entry {
    cursor: pointer;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    list-style-type: none;
    border-color: white;
    border-width: 1px;
    border-style: solid;
    font-weight: 100;
}

.add-entry:hover {
    border-color: #61dafb;
}

input {
    /** Needed because padding changes width uncontrollably if this is missing */
    box-sizing: border-box;
    display: block;
    outline: none;
    text-align: left;
    background-color: transparent;
    color: white;
    font-size: calc(10px + 2vmin);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
}
</style>
