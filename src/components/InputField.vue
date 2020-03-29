<template>
    <div class="input-field">
<!--        <input :id="id", @change="onChange" :value="value" @focus="isEditable = true" @blur="value.length === 0 ? isEditable = false : null"/>-->
<!--        <label :class="{active: isEditable || value.length > 0}" :for="id">{{label}}</label>-->
        <input :id="id" :value="value" @input="onChange" @focus="isEditable = true" @blur="isEditable = value.length !== 0"/>
        <label :for="id" :class="{active: isEditable || value.length > 0}">{{label}}</label>
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props: {
            onChange: Function,
            id: String,
            label: String,
            value: String
        },
        data: () => ({
            isEditable: false,
        }),
    }
</script>

<style lang="scss" scoped>
    .input-field {
        position: relative;
        width: 400px;
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }

        input {
            border: none;
            height: 2rem;
            font-size: 18px;
            margin: 0 0 8px 0;
            border-bottom: 1px solid #0e0e0e;
            width: 100%;
            transition: background-color 300ms;

            &:focus {
                border-bottom: 1px solid #283593;
            }
        }

        label {
            position: absolute;
            font-size: 17px;
            top: 0;
            left: 0;
            transition: transform 300ms;
            font-weight: bold;

            &.active {
                color: #283593;
                transform: translateY(-18px) scale(0.8);
            }
        }
    }

</style>