<template>
    <header>
        <div class="nav">
            <div class="child">
                <router-link to="/" class="link">
                    <h3 id="logo">CruzNotes</h3>
                </router-link>
            </div>
            <div class="child">
                <a href="https://github.com/Ikecruz" target="_blank" class="link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/ikxcrxz" target="_blank" class="link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/onyeka-ikedinobi-98538b204/" target="_blank" class="link">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </header>
</template>
<style scoped>
header{
    background: white;
    width: 100%;
    height: 70px;
}
.nav{
    height: 100%;
    width: 80%;
    margin: 0 auto;
    /* background: red; */
    /* padding: 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.child{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    /* background: blue; */
}
.link{
    text-decoration: none;
}
.link > i{
    color: black;
    font-size: 1.5em;
    margin: 0 10px;
}
.link > i:hover{
    color: #5e5e5e;
}
#logo{
    color: black;
    font-weight: 900;
}
#logo:hover{
    color: #5e5e5e;
}
</style>