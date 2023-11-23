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
          <button class="thread--commonButton">enjoy photos!</button>
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
  button {
    padding: 0;
    font-family: inherit;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
}
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
  .thread--commonButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    aspect-ratio: 1;
    color: rgb(66, 66, 66);
    background-color: #efefef;
    border-radius: 50%;
    border-color: rgb(18, 51, 40);
    box-shadow: -4px -4px 8px #fff, 4px 4px 8px rgba(0, 0, 0, 0.24);
  }
  @media (any-hover: hover) {
  .thread--commonButton {
    transition: box-shadow 0.2s;
  }

  .thread--commonButton:hover {
    box-shadow: -2px -2px 4px #fff, 2px 2px 4px rgb(0 0 0 / 24%);
  }

  .thread--commonButton:active {
    background-color: #ebebeb;
    box-shadow: inset 4px 4px 8px rgb(0 0 0 / 16%);
  }
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