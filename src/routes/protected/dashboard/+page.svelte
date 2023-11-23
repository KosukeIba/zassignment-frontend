<script lang="ts">

  let photos: any[] = [];

</script>

<body>

  <main>
    <div class="main--container">
      <div class="nav--container">
        <div class="nav--container__inner">
          <p>
            <img src="/src/logo-logos_transparent.png" alt="logo" height="80px" width="80px"/>
          </p>
          <p class="nav--profile">
            My profile
          </p>
        </div>
      </div>
    
      <div class="thread">
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
                <li style="font-size: x-small;">{photo.id}</li>
                <li>{photo.label}</li>
              </div>
            {/each}
          </ul>
        </div>
      </div>
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