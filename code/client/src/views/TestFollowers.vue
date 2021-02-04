
<template>
<div class="container">
    <table>
        <tr>
            <th>user</th>
            <th>username</th>
            <th colspan="2">action</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td><button class="btn" @click="follow(1, user.id)">follow</button></td>
                <td><button class="btn" @click="unfollow(1, user.id)">unfollow</button></td>
        </tr>
    </table>


</div>
</template>
<style>
.btn {
    background: aliceblue;
    border: solid 1px indigo;

    color: indigo;
    height: 3rem;
    padding: .5rem;
    border-radius: .5rem;
}
</style>

<script>
export default {

    name: 'TestFollowers',
    components: {
    
    },
    data(){
        return{
            me: JSON.parse(localStorage.getItem('user')).id,
            users: [],
            users_info: []
        }
    },
    async mounted() {
        let res = await this.$api.get('/users');
        this.users = res.data;

        this.users.forEach(async (ele) => {
            let result = await this.$api.get(`/users/profile/${ele.id}`);
            // console.log('user_info: ', result);
            if(result){
                this.users_info.push(result.data.id);
            }
            
        });
    },
    methods: {

        /**
         * @param user_id - mine user id
         * @param follow_id - target user id
         */
        async follow(user_id, follow_id) {
            const obj = {
                user_id: user_id,
                follower_id: follow_id
            };

            this.$api.post('/follow', obj).then(res =>{
                console.log(res);
            })
        },

        /**
         * @param user_id - mine user id
         * @param follow_id - target user id
         */
        async unfollow(user_id, follow_id) {
            const obj = {
                user_id: user_id,
                follower_id: follow_id
            };

            this.$api.get('/unfollow', obj).then(res =>{
                console.log(res);
            })
        },
        

        async getUsers() {
            await this.$api.getUsers().then(x => {
                return x;
            });
        }
    }
}
</script>
