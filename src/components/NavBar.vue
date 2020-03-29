<template>
    <nav>
        <div class="nav-wrapper">
            <div class="logo">
                <router-link to="/">
                    ToDo
                </router-link>
            </div>
            <ul>
                <li>
                    <router-link active-class="active" to="/" exact>List</router-link>
                </li>
                <li>
                    <router-link active-class="active" to="/create" exact>Create</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss" scoped>
    nav {
        height: 60px;
        line-height: 60px;
        background-color: #90a4ae;
        position: relative;

        .nav-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            padding: 0 20px;

            a {
                padding: 0 15px;
                color: #ffffff;
                height: 100%;
                display: inline-block;
                font-size: 1.5rem;
            }

            .logo {
                flex-grow: 1;
                text-align: left;

                a {
                    padding: 0;
                    font-size: 2rem;
                }
            }

            ul {
                display: flex;

                li {
                    transition: background-color 300ms;

                    &:hover, .active {
                        background-color: #37474f;
                    }
                }
            }

        }
    }
</style>