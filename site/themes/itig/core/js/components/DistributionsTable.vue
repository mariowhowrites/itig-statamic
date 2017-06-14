<template>
    <section class="distributions-table section">

        <input type="text" v-model="search">
        <div class="container">
            <table class="table is-bordered is-striped">
                <thead>
                    <tr>
                        <th v-for="column in columns">
                            <a href="#" @click="sortBy(column)">
                            {{ column }}
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="state in filteredStates">
                        <td>{{ capitalize(state.slug) }}</td>
                        <td>{{ state.euip }}</td>
                        <td>{{ state.percentage }}</td>
                        <td>{{ state.ir_allocation }}</td>
                        <td>{{ state.infrastructure_allocation }}</td>
                        <td>{{ state.total_state_allocation }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                states: [],
                search: '',
                sortKey: 'euip',
                reverse: false,
                columns: ['State', 'EUIP', 'Percentage', 'IR Allocation', 'Infrastructure Allocation', 'Total State Allocation']
            }
        },
        computed: {
            filteredStates() {
                return _.filter(this.states, this.searchContains);
            }
        },
        filters: {

        },
        methods: {
            getStates() {
                axios.get( url + '!/PHPtoVue/collection')
                    .then(
                        res => {
                            for (let state of _.values(res.data) ) {
                                this.states.push(state);
                            }

                            this.sortBy('euip');
                        }
                    );

            },
            capitalize(val) {

                // gotta love those edges
                if ('d.c.' === val) {
                    return 'D.C.';
                }

                // we have a slug. take the -'s out, capitalize each word, put spaces in.
                return _.map(val.split('-'), function(str) {
                    return _.capitalize(str);
                }).join(" ");
            },
            sortBy(column) {
                column = column.toLowerCase();
                // is column equal to state? convert to slug, to match Statamic data. TODO: update data model
                column = column == 'state' ? 'slug' : column;
                // if we're already sorting by this category, reverse order
                if (this.sortKey == column ) {
                    this.states = this.states.reverse();
                }
                else {
                    this.states = _.sortBy(this.states, column).reverse();
                    this.sortKey = column;
                }


            },
            searchContains(value) {
                //return true if the provided value contains the search query. As -1 indicates no match, anything else means a match.
                return value.slug.search(this.search.toLowerCase()) != -1;
            }
        },
        created() {
            console.log(url);
            this.getStates();
        }
    }
</script>
