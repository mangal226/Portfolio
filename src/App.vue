<template>
  <div id="app">
    <div id="nav">
      <navigationbar/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navigationbar from "./components/Navigationbar.vue"
 export default{
   components:{
       "navigationbar":Navigationbar
   }
 }
</script>


<style >


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

header
{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
	margin-top: 20;
}


#logo_hamed
{
    display: flex;
    flex-direction: row;
    align-items: baseline;
	margin-top: 20;
}

#logo_hamed img
{
    width: 250px;
    height: 75px;
}

nav ul
{
    list-style-type: none;
    display: flex;
}

nav li
{
    margin-right: 15px;
}

nav a
{
    font-size: 1.3em;
    color: #181818;
    padding-bottom: 3px;
    text-decoration: none;
}

nav a:hover
{
    color: #760001;
    border-bottom: 3px solid #760001;
}


section
{
    display: flex;
    margin-left: 10px;
	position: relative;
}

article
{
    text-align: left;
    margin-right: 150px;
    flex: 15.5;
	font-size: 1.2em;
}

article li
{
	color: #760001;
}

#photo
{
    position: relative;
    background-color: #ADD8E6;
	border: dashed;
    border-radius: 2.5px;
	margin-right: 50px;
	margin-top: 50px;
	margin-bottom: 10px;
    padding: 10px;
    color: #760001;
    font-size: 1.2em;
}



#photo_hamed
{
    text-align: center;
	flex: 1.5;
	width: 200;
	height: 225px;
}

#photo_hamed img
{
    border: 1px solid #181818;
	flex: 1;
	width: 200px;
	height: 225px;
}

#interet
{
	position: relative;
	border-top: dashed;
	border-left: dashed;
	width: 1000px;
    border-radius: 2.5px;
	margin-right: 50px;
	margin-left: 200px;
	margin-top: 50px;
	margin-bottom: 10px;
    padding-left: 50px;
	padding-top: 10px;
    color: #760001;
    font-size: 1.2em;
}

aside li
{
    font-family: 'Trebuchet MS', Arial, sans-serif;
    color: #181818;
}


#portfolio_info, #portfolio_meca
{
    position: relative;
	margin-top: 20px;
    color: #181818;
    font-size: 1.2em;
    text-align: right;
}


</style>
