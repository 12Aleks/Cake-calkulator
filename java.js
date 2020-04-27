



new Vue({
    el: '#app',
    data:{
        layers: [],
        layersType: {
            biscuit:{
                price1sm: 50,
                label: 'Бисквит'
            },
            beze:{
                price1sm: 100,
                label: 'Безе'
            },
            curd:{
                price1sm: 60,
                label: 'Творожный'
            }
        },
        defaultLayerType: 'biscuit',
        defaultHeight: 4
    },
    computed:{

    },
    methods:{
       addLayer(){
           this.layers.push({
               type: this.defaultLayerType,
               height: this.defaultHeight
           })
       }
    }

});