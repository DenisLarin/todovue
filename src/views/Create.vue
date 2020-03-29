<template>
    <div class="row">
        <h1>Create new ToDo</h1>
        <form @submit.prevent="createHandler" class="createForm">
            <InputField :value="title.value" :onChange="(event)=>onChange(event, 'title')" :id="title.id" :label="title.label"/>
        </form>
    </div>
</template>

<script>
    import InputField from "../components/InputField";
    export default {
        name: "Create",
        components: {InputField},
        data: ()=>({
            title:{
                value: "",
                label: 'ToDo\'s title',
                id: 'title'
            },
            tasks: [],
        }),
        methods: {
            createHandler(){
                console.log("create");
                console.log(this.title.value);
            },
            onChange(event,key){
                console.log(event.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        margin-bottom: 20px;
    }

    .createForm {
        display: flex;
        justify-content: center;
    }
</style>