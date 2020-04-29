Vue.component('app-cake', {
    template: `<div class="container">
        <div class="simple">
            <h2>Cake builder</h2>
            <hr>
            <button type="button" class="btn btn-primary" @click="addLayer">Add layer</button>
            <hr>
            <div class="row" >
                <div class="col col-sm-6">
                    <div class="cake">
                        <div v-for="(layer, index) in layers"
                             :style="{height: layer.height * 10 + 'px'}"
                             :class='"layer-" + layer.type'
                             class="layer"
                             :key="index"
                             @click="changeHeight(index, 1)"
                             @contextmenu.prevent="changeHeight(index, -1)"
                        >

                        </div>
                    </div>
                </div>
                <div class="col col-sm-6">
                    <table class="table table-bordered" v-show="hasLayers">
                        <tr>
                            <th>Type</th>
                            <th>Height</th>
                            <th>Actions</th>
                        </tr>
                        <tr v-for="(layer, index) in layers">
                            <td>
                                <select class="form-control" v-model="layers[index].type">
                                    <option :value="key"
                                            v-for="(lt, key) in layersType">{{lt.label}}
                                    </option>
                                </select>
                            </td>
                            <td>
                                <input type="number" class="form-control" v-model.number="layers[index].height">
                            </td>
                            <td>
                                <button type="button" class="btn btn-warning" @click="deleteLayers(index)">-</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col col-sm-12">
                    <hr>
                    <div class="alert alert-success price" v-show="hasLayers">
                      <span class="price text-with">
                          {{price}} руб
                      </span>
                        <button type="button" class="btn btn-warning">Order now!</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            layers: [],
            layersType: {
                biscuit: {
                    price1sm: 50,
                    label: 'Бисквит'
                },
                beze: {
                    price1sm: 100,
                    label: 'Безе'
                },
                curd: {
                    price1sm: 60,
                    label: 'Творожный'
                }
            },
            defaultLayerType: 'biscuit',
            defaultHeight: 4
        }
    },
    computed: {
        price() {
            let sum = 0;
            this.layers.forEach((layer) => {
                sum += layer.height * this.layersType[layer.type].price1sm;
            })
            return sum;
        },
        hasLayers() {
            return this.layers.length > 0;
        }
    },
    methods: {
        addLayer() {
            this.layers.push({
                type: this.defaultLayerType,
                height: this.defaultHeight
            })
        },
        changeHeight(index, dh) {
            this.layers[index].height += dh;
        },
        deleteLayers(index) {
            this.layers.splice(index, 1)
        }
    }
})


new Vue({
    el: '#app',


});