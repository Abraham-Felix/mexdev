<template>
<div class="channeldata">
   <h2>RAW JSON</h2><br>
    <div  v-for="question in questions" v-bind:key="question">
        <h1>
            {{ question.innerText }}
        </h1>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name:'FormResponse',
    mounted() {
        this.getData(this.api.baseUrl)
    },
    data() {
        return {
            questions: [],
            api: {
                baseUrl: "https://spreadsheets.google.com/feeds/cells/1-10a44rqtdWcPQqYtBtne0ImmNOaqSuPsiM2YNiTdMiWo/1/public/values?alt=json-in-script",
            },
        };
    },
    methods: {
        getData(apiUrl) {
            axios.get(apiUrl).then((res) => {
                this.questions = res.data;
                console.log(this.questions)
            });
            // .catch(error => console.log(error));
        },
    },
};
</script>

<style lang="scss" scoped>
.channeldata {
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--primary);
    flex: 1;
}

.messages {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;

    .channelmessage:first-child {
        margin-top: 0;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
}

.inputwrapper {
    width: 100%;
    padding: 0 16px;
    height: 68px;

    input {
        width: 100%;
        height: 44px;
        padding: 0 10px 0 57px;
        border-radius: 5px;
        color: var(--white);
        background-color: var(--chat-input);
        position: relative;

        &::placeholder {
            color: var(--grey);
        }
    }

    .icon {
        color: var(--grey);
        position: relative;
        top: -50%;
        left: 14px;
        transition: ease-out all 0.2s;
        width: 24px;
    }
}
</style>
