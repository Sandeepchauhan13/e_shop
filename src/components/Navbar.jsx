import React from 'react'
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  // const signOut = () => {
  //   dispatch({
  //     type: "SET_USER",
  //     user: null,
  //   });

  //   localStorage.removeItem("user");
  //   navigate("/");
  // };
  return (
    <Container>
      <Inner>
<Logo onClick={()=> navigate('/home')}>
    <img src="https://t3.ftcdn.net/jpg/02/98/18/60/240_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg" alt="imgload"  />
</Logo>
<SearchBar>
    <input type="text" placeholder="search.."/>
    <SearchIcon onClick={()=> navigate('/addproduct')}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD7+/tYWFhVVVWMjIz4+PjMzMxSUlLz8/NKSkosLCy6urrg4OCkpKTS0tKenp7q6uofHx9dXV12dnatra3d3d1tbW03NzclJSUQEBCWlpaJiYlwcHBCQkLFxcWAgIAXFxdkZGQ0NDS0tLQ+Pj4JzPDcAAAI+0lEQVR4nO1dCWLiMAwE2nKG+2qgQEK3///icmxZ2kZjJToCKfMAOxPrsizLtZoKGs1+NFgny2n3NV7VV/F792mZvAyiRbOhM0GZ6AwHyb5XpxBPk1FrXPZHFsdw9JyS5K7Qfmk1y/7W/FgM2hxyF2xHw7I/OQ/Gg9dc9M6YrPtlfzgPnWhagN4Z7fntK+VimRbmd8K0VTYFiGE+5cvGx65sGiRaGvyOeI3KppKJqKvE78RxXjadH1h8KPI7Ir4tWe3MlPkdMb0hu/rHgN8RoxuJWxeaCvgVrzchqm9m/I5Ylk2vNrZbwDN6i3IJ7lbGBA8o1XHYSugnNqXxG29dCB52HSVJ6tCJ3xGlhHE7R4KlKKOVl6cw8iY4cCZYrye+BF/cCTqb1KQEgodQ3I9g0RVcTXrb9vZ9UjRMcAvhcutg3N6MdsPO1RDNxW4wa9OpYgKJD8GcVnQ6WnSIkZqLwTLfeq49CObyg8kwlM1uLHLJvINfzBHJ7Lm7u9aGv5Lm0c2Y+yXxKE8SojlnZ8mts//MYHsyz33WEjFzWaltaoO3XZoUE6Udbx33ypy+fgPrE4obvDlr/IEio28YcwzCXnKCNGalJe1UkZOTkWbHhpPwHBMrVWQoYZty7jmwDE9jpIqL8Mw6IQdDG228YlhGtY7+FsGANbY4+A+GoxO9c4Zm0O2+qM11QSc051b1t+5D0+mf+YfM+JPyfKFNdld5vqCZ0d+chrYc2sYmEDRqr+ARgVVMdY1NhGfbqk72iYAu6uYXsaeYGBVt4VlVPUYL/02r4+gm9oua+31cRmJX49OH86Z6E+HMhWV2CIcZf9TmgUvYVpsmC9ANx1qzYF+osJtAgKqo5RPhdsa6WgL+XqXAppOCOUyTJifAXalOdAq9vX3RK/zBOlYOFcR6ZNnRH37VmADlgCcaEwSBQhuNpBQ6afIpIEDuOFEYH6RpfZYQ+2P56MhaexVIoLBYLkZASE3SQZkAmpiIBwcS4lcAAsypPHIDAuJYwwsS4VKPDOyYfTjzHyBpI1XEET20Z/0u2ChKy2ye6aFVPp0LeovxKjumAUFhovLlXACTLlNEoIa+t+lA7CjzyuDXOV+KpBO2iWhcOivrWGQW+BKZTaeTst71nnQJQU9iahq0CfMuvQaKKNGXJjlqbJyA+gn6SFFiTGlHa5tDzAKdD5NENXTE638Hgo6uJCaBdhbuheXA1MwEo67JUf0vldHBhyRrSjsh//4AdCHBu2BUWrvdTWmtRpacSc6g6FSp2nfzQftmwaBkfmSl9t180JGpYFAyk+iVR7wGnTESDBpTY/bUvpsPOkYWDEoqt03xBQZ9WCowe+SY/kEbOmYTJP1uag1p5yxgSOqhxMkWBa2Hgg3iOzVmGbaUTvsJBr0pf0hvEAWDPlkMWhQmMQ0dl5bQfiy1YEibL/8b8iCjIhiVPhDx3x/SR7WS/SG9xze8mUOA3uMnglHpPI0kc1AMNn+blgz/sG1Dfosk10Zrd8/dmNJn+ZJ8aYMM26qS8wZpDG9TQ1ecyG6y0Q7Ru4ET/SWymxB0onnl3GmMVsM30bigGslXEcG1K1nwAfTb4PYYALiTKCzrASVROp/OBL11kqYbQKmOZytVIEvS6AoooucBGyhcktZE0VFNfeUY1oA7CeJKc3Bf1a//FpAkeW4ayIdKGTkLoJheXkuPiqy9+sShOmWF6xCgtPNDPjoL4KqlxgEKfdLtlctAd/Q0Lnyg8X00Ed2WVbmzg+4CeJhTVKmvc34C21Q41Hqj+3k6u1TYGso+IwXcVX2lVDAB3zqwLjuB/zdRmgTe5LY+hYI31tV0BDZUsE1nIF+lWMWLG2BZ2lPcCEBRQ3CbMbt8Brw/qnrUjtti2GWHHTsd4EW0qlvAPbF0a+kDzalsrkAFeospKwed3j8h0Z3tBGhG9WONUD9B/dxiqNOtev1n6BGnRHm+wAoa3JMPNi7V1cVQf7/Y4FABRcAndBWdRrCzoEU43Ah2F+1ptZDoBB+OsjlSYDQv1WmJ00pD81iV1TGaUmqY8JCNqRvGiYwO4+JnYTgP19j1G2H096zX30SOKmjP6rZXH1l9ftPiieIWpw+97bU5uqjlGt1itrwfbHh5gnHyi9Hl94h2/p3Ngsev3MZU1+jmk9UW92lP+0tzgR6RV5i8cCOA8Yj9DoRHtRmvq/gZvUFYaTrzXM9GeXSm4hj0//hIdjTLcSvJ/W6bB8Xcr8xsl9+eKDk/UrIp9iqdx/VVns/4jlXvo72fvSX7520vLTTCP2xePrE2K8wq/qaxMp7MKDKCcB88WzEs6cWnDFj0aD6DscfxwbOZoObxi2KgTb+dLvKjGzFGUGTsdHGYOhE8BtuIop0uNpjbARnic0yEQik7XfR4BnH6GQyhOMNuFVnPwojwPwyFTwnY6aKxpL5fJbbwYwmGFGtR4FxKgC+J38BzEHZO47BPMHqzM/6a7gnNYrmKtb7F69zfNw7B/2hobg6IUmV+sx85w7CkGDqNA5ojTXWcZqTOGbpgqYtHjvNUid82MxfJ0XZTXTzij8Y6Tol8Msue2eriEZHQ5qwSMm/F26/Z6uIJ/TX7wc0f2A7AmUSD7n9wDftVPGBYKAPQWwcyyA3QENeb4kFak3wqGaR3Am8VHQT1jH604cnrdhZx8//MVfS7/dnoz5M9OpOYPL2BlHjGgMxVNGOU/VXNfjSadd/T62+Iu8kg6jdz/+zb0sUsdMZjoQjdmC5a4OZ0UR23qYu6uHldlKP6gso1N2V/pgC37zTkeDiNz1W8Y4q/wGk8dPGyincsqL/A9f8CXfwFrv/hNKqwig+ncVnFOxbUhy5eVrHs7xTgoYuXVbxjQWVSvOdVfAhqJQT14TQ+V7Hs7xTgoYuXVbxjQX3o4mUVy/5OCX6BLlZfUB8BXBUoPpzGZRXvmCLTaXg/26wJni56NuzWB2MV75sgQxfvnWBQF++eYC0gqFUgCAW1GgSBoFaEIO00KkOwRuhilQhm6mK1CGboYsUI/tTFyhGsfdPFKhL8QrGaBK90saIEa5dVrC7Bf06jygRPglppggeK0wyCfwEjZnR63/53hwAAAABJRU5ErkJggg==" alt="imgload" />
    </SearchIcon>
</SearchBar>
<RightContainer>
    <NavButton>
        <p>Hello,</p>
        <p>Guest</p>
    </NavButton> 
     <NavButton>
        <p>Return</p>
        <p>& Orders</p>
    </NavButton>
    <BasketButton onClick={() => navigate("/checkout")}>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACUCAMAAADS8YkpAAAAY1BMVEX///8zMzMwMDCHh4c/Pz/KysosLCz8/PwgICDn5+dSUlIoKCgAAACjo6N2dnbb29vt7e1fX198fHypqakWFhbz8/MbGxtISEicnJw4ODhqamq4uLhNTU3U1NQNDQ2NjY3BwcHKBoO5AAAGAElEQVR4nO2b63ayOhCGm6CABAVEQKEI93+Vu84EyUnxYxNo18rzr1mh6zVM5pTw9eVwOBwOh8PhcDgcDofD4XA4ZnLIYgNZsrWuF6RRSQww1mytzEwTmuQS4pPfucL5xayXXLqtpRnpfWrWS9nW0owU3j1kMqEPguNia21GiuaskrGH3vsv3XE6Cdg0O22t41PS6mHT9Pt3GoROcX44OXrbby3kU3KIIey4tY5PaXcPg2DnYGshH5JmPhhws1+cNrUh+Aweje6Wp4psWFnDMMZZwL+cl9d7eBGkl4ASC37n26LgS7683u5FmrkEpQW9SYz/m4UyaNfElwbxXVBprm94nsFEK/ZQ8DTzepS5YiTJcmEsx/BdiXPzGp6/eeLEK0z0IwuVQHBCj6b+6wDWPfSkwQxkZFK6cX08T3etOJZgGKpthKHmDgt5VcdBrx+Z9IqRIPAgBZGXsoeHmZXCpQUD1HPKEt69XHsY9BbwfuSxrw6Mye9t6D1ASPajgzIewe+Ip/QeIOdntWgjAfxLQq1EZP5Ctb2Mdh1LJmjSC79Lfj3FxWBLi9HAYlzUaI8OIpaW3aC3vcHWkvYlmm9pqe4eNrNSZOA+jKV9b9Jb6tsVY5D86HIEEewsohjwHvRepFrUoBen+dI0iPG0tFVl4XLce3kUa9FQWjiDXnwNvmj9KXqczFYR0GJoUDzagemGadB7xb0lul/MUbUNsRygl14Uvdys3+tF7yK7rg67GvaKWO5qZXeJpZKfTeitIRzfCm1oZ6+NiK3AUn6BGLjk3oRB7zf8qkqYlMB2Yyd7TY0EfVItj8I2pJXoNvR8J6AwJD7aw1CoJSTLkcIi/eSEEhhUbydhaIf5pDgLI2/VjSM1DllsygXo0ajcveSFkq8PibNwRHwU5Vo032eVvCB+ZLMF01ZLV52y316aIlt6gS33lL3BDkWINvb5iOWePeaU5CZ1lIg2xtW9HcHS2PKZSMrdUpuMtDzA7cehiCojB14Ij881mCZZaEVJmEIyVmZioaTFi+CmJhlXY7K3OEdYlrvUkPEwNRDSbi0ep/D2Q6GSgGhBmVoNLg22eeSQDJ0FUr7T26q1FDeQzEqpKVAQCLU30cvnWHEKeaGmt/cV57UHAyk72w17nsdKdcJeFaPr1X4Smm9o/0SvxzaPWNMmWuGs6e0UkymgX//jZ6zrbYnW8uKbyRuHNL2ekppjN8K++f6Iw6rgW0irBmf1Rq/q8nh1b9v7PkBvIN3eqGCxvl/rLWpsRj0HcqyWLfSpNRp4++VVMAg87CJjeFD1Yo3HzsOM4IS7do0bIIY2D7bQ7q/1YoAeLRwtSPaK1sD6JxQiE2+hjaul6sXj0TG88aizznk/j/yCAfMW2uhd1fxhj07laa5ovivdpxhCcpByCvTJl7wYBrjew/A3hgs6TMDtp/Q07YEnRXRMvglPvpW/qTpApD/93Uqn5zU/myVzwSfDtU770Vz/N6tdB0qWOeoM7ScPyDJVcnle6zZQgP6W0HA+5b1eyTt8DW0eGnnz6Rr7qdkT3gmt02A+66kdm8+/88Kqge6P3U/Eik2sKH43q+aDS8ATlj9jwJgQWjw6W5gD3tLIpmf+DvB4ytLNBRvYvBliA7y6QKPzaRbHtW8+J7w/7s/jskJnRwJPYecTr9EqEbn+v6Td+kGASk/n129ki49lrnc203h/KHfrZesDxzqazXmt2k0kPczmr3zI4fhHkmPXXT8zxiLvuq7ZNGUuTnBNg3xSm+e7x1Ra9dZVvSTd8aAR3qaWOPBi3gSMN6v6itMzxrHdxNw8foYKutVXU+KXkxOrVtzGqaHFG1zvCDzhw9+JUoPfm8D1nTQeO6Ri249WbxPETszm4m0MIo3ERaveughP0tuvpFCGn0L8+/pavOH5lqNgvxNnU62gV7+yvxKtsOmnLnVHo+DQ+qWHV3TPT9fvU0d/bTz8Nn+D1HfgDF8sURZO9/Z7+rgwSX0WbtmzaOodY7f6kywm8SqfkajbtsVStH2//1BCsu/329mCw+FwOBwOh8PhcDgcf5v/AHH9arqtInDLAAAAAElFTkSuQmCC" alt="imgload" />
<p>{basket?.length}</p>
    </BasketButton>
</RightContainer>
      </Inner>
      <MobileSearchBar>
    <input type="text" placeholder="search.."/>
    <SearchIcon onClick={()=> navigate('/addproduct')}>
        <img src="data:image/png;base64,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" alt="imgload" />
    </SearchIcon>
</MobileSearchBar>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 60px;
background-color: #131921;
display: flex;
align-items: center;
position: relative;

@media only screen and (max-width: 767px) {
  height: 120px;
  flex-direction: column;
}
`;
const Inner = styled.div `
width: 100%;
display: flex;
align-items: center;
@media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
margin-left: 20px;
cursor: pointer;
img {
  width: 60px;
  height: 40px;
  margin-top: 10px;
}
`;
const SearchBar = styled.div`
height: 35px;
flex: 1;
margin: 0px 15px;
display: flex;
align-items: center;

input {
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px 0px 0px 5px;

  &::placeholder {
    padding-left: 5px;
  }
}

@media only screen and (max-width: 767px) {
  display: none;
}
`;

const MobileSearchBar = styled.div`
height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;

const RightContainer = styled.div`
display: flex;
align-items: center;
width: fit-content;
justify-content: space-around;
height: 100%;
padding: 5px 15px;
`;

const NavButton = styled.div`
color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
const BasketButton = styled.div`
display: flex;
align-items: center;
height: 90%;
cursor: pointer;

img {
  width: 30px;
  margin-right: 10px;
}

p {
  color: #fff;
  font-weight: 500;
  margin-right:10px;
}
`;
export default Navbar;
