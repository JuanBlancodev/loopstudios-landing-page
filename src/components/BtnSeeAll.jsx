import styled from 'styled-components'

const Button = styled.a`
  width: 170px;
  padding: 10px 15px;
  border: 1px solid var(--color-black);
  letter-spacing: 3px;

  &:hover{
    background-color: black;
    color: white;
  }
`

const BtnSeeAll = () => {
  return (
    <Button className='black decoration-none ff-secondary uppercase fs-medium center' href="#">
      See All
    </Button>
  )
}

export default BtnSeeAll