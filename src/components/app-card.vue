<template>
    <div class='app-card'>
        <div class='card-img'>
            <div class='ratio-content'>
                <img :src='data.image' alt='Card Image'>
            </div>
        </div>
        <div class='card-content'>
            <h2 class="card-title">{{data.title}}</h2>
            <p class="card-summary">{{data.summary}}</p>
            <router-link :to="`/blog/${data.id}`">Continue Reading</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .app-card {
        width: 33%;
        padding: 40px 10px 0;
        box-sizing: border-box;
        @media(max-width: 900px) {
            width: 50%;
        }
        @media(max-width: 600px) {
            width: 100%;
        }
        .card-img{
            position: relative;
            &:before{
            content: '';
            display: block;
            padding-top: 66.5%;
            }
            .ratio-content{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            border-radius: 5px;
            }
            img{
            width: 100%;
            min-height: 100%;
            }
        }
        .card-content {
            h1 {
                color: #341a65;
                margin-bottom: 0px;
            }
            p {
                color: #716565;
            }
        }
    }
</style>

<script>
export default {
    props: {
        data: {
            required: true
        },
    },
}
</script>

