<script lang="ts">
  import CommonButton from "$lib/components/commonButton.svelte";
	import Post from "$lib/components/post.svelte";

  let photos: any[] = [];

  async function getPhotoProd() {
    await fetch('https://data-honor-403613.an.r.appspot.com/image/db', {
      method: 'GET'
    }).then(res => res.json())
    .then((data) => {
      console.log(data)
      photos = data
    })
  }

</script>

<body>

  <main>
    <div class="main--container">
      <div class="nav--container">
        <div class="nav--container__inner">
          <p>
            <img src="https://storage.googleapis.com/zippractice1-photos/src/Your%20Pic-logos.jpeg" alt="logo" height="80px" width="80px" style="border-radius: 50%;"/>
          </p>
          <p class="nav--profile">
            My profile
          </p>
        </div>
      </div>
    
      <div class="thread">
        <div>
          <CommonButton name="enjoy photos!" on:commonButtonClicked={getPhotoProd}/>
        <div>
          <ul>
            {#each photos as photo}
              <div class="thread--postContainer">
                <img 
                src={"https://storage.googleapis.com/zippractice1-photos" + photo.uri} 
                alt={photo.label}
                class="thread--postImage"
                loading="lazy"
                />
                <li style="font-size: x-small;">{photo.ownerId}</li>
                <li>{photo.label}</li>
              </div>
            {/each}
          </ul>
        </div>
      </div>
    </div>

    <div class="post">
      <Post />
    </div>
  </main>

  <footer>

  </footer>
  
</body>


<style>
  
  li {
    list-style: none;
  }
  .main--container {
    display: flex;
  }
  .nav--container {
    padding: 20px;
    flex: 1;
    height: 90vh;
  }
  .nav--container__inner {
    position: fixed;
  }
  .thread {
    padding: 20px;
    flex: 5;
    border-left: slategray solid;
    border-width: 1px;
  }
  .thread--postContainer {
    padding: 20px;
  }
  .thread--postImage {
    width: 40%;
  }
  .post {
    position:fixed;
    right:50px;
    bottom:50px;
  }
</style>