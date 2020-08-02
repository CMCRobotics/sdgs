<template>
    <div>
        <form class="w-25">
            <h3>Join a game</h3>

            <div class="form-group">
                <label>Game Code</label>
                <input class="form-control form-control-lg" autofocus/>
            </div>

            <div class="form-group">
                <label>Team Code</label>
                <input class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-primary btn-md">Join Game</button>

        </form>
       
    </div>
</template>

<script>
    export default {
        title () {
            return `SDG Stadium — Join a game`
        },
        data() {
            return {}
        }
    }
</script>

