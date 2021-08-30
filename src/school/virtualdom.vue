<style>

.code-snip {
    background-color: gray;
    color: white;
    padding: 30px;
    font-weight: bold;
}

</style>

<template>

<div>
    <Sectorinit stitle="i am secotorinit a prop was used to template this h1"/>
        <card>
            <p class="center">
                Down beneath is a label that is rendered from data being included to
                <br> the normal DOM, we are using V-for & key inside the top form notch to
                <br> add cards looped as a single item, we are using v-html to bind the html
                <br> from the data object return (data/cards/label) to the DOM label element
                <br> & rendering it using slot instead of using card.label in double c-braces.
            </p>
            <br>
            <form class="center" :key="card" v-for="card in cards">
                <label v-html="card.label" slot="label"> </label>
                <input type="text" />
            </form>
            <br>
            <div class="center code-snip" :key="example" v-for="example in examples">
                <p class="d-inline">{{example.sample1}}</p>
                <br>
                <p class="d-inline">{{example.sample2}}</p>
            </div>
            <p class="center mt-10">
                Every element is a node. Every piece of text is a node. Even comments are nodes!
                <br> A node is just a piece of the page. And as in a family tree, each node can have
                <br> children (i.e. each piece can contain other pieces).
                <br>
            </p>
        </card>
        <Sectorinit stitle="i am another secotorinit a prop was used to template this h1"/>
</div>

</template>

<script>
import Sectorinit from '../components/Sectorinit'

export default {
    name: 'virtualdom',
    components: {
      Sectorinit,
    },
    data() {
        //virtual DOM is here inside the vue instance
        return {
            cards: [{ //html inside vue data property - this is called Vnode ( nodo virtual )
                label: '<p> I am a label :)</p>'
            }],
            examples: [{
                sample1: '<form class="center" :key="card" v-for="card in cards">' +
                    '<label v-html="card.label" slot="label">  </label>' +
                    '</form>',
                sample2: 'data() {return { cards: [ { label: <p>i am a label</p> } ] }}'
            }]
        }
    }
}

</script>
