import { render, fireEvent, screen } from '@testing-library/svelte';
import Post__SvelteComponent_ from './post.svelte';

describe('post.svelte', async () => {
  let file: Blob;
  let modalShow : boolean = false;
  let photoText : string = '';
  let ownerId: string = '';

  const open = () => {
    modalShow = true;
  }
  const close = () => {
    modalShow = false;
  };

  test('show post button with post name', async () => {
    render(Post__SvelteComponent_);
    expect(screen.getByRole('button').textContent).toBe('post')
  })

  // function calling itself for CommonButton component should be tested in CommonButton test file.

  test('modal show is false by default', async () => {
    expect(modalShow).toBe(false)
  })
  test('modal show should be open in calling open fn',async () => {
    open()
    expect(modalShow).toBe(true)
  })

  test('post modal is off by defalt',async () => {
    const  {component} = render(Post__SvelteComponent_);
    // component.modalShow = true;
    expect(screen.queryByTestId('postModalTest')).toBe(null);
  })

  test('post modal is on if modal show is true'), async () => {
   
  }
  
})