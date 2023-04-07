import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post({ data }) {
  const date = new Date(data.createdAt);
  const d = date.toDateString();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "10rem", objectFit: "cover" }}
          variant="top"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADe3t7MzMzo6OiJiYkEBARdXV34+Pjz8/MRERF3d3eioqKurq78/Pzj4+OampodHR3Q0NCTk5PHx8eCgoK7u7vU1NRQUFBBQUE7OztqamqwsLBWVlZvb29lZWUyMjIrKyuFhYUYGBhGRkbXxTAWAAADZ0lEQVR4nO3abUOqMBzG4c3MIg3SzDqWVie//2c8yf4DBhshD+u8+F2vdMzBHbAHSCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8t25/+wAml70EN83O5k7RfBaU2jqJFPialG2ZWzNkjHzfx6z/JIFN+sz9AzzpoMzWuf0wBQ++nRk78/Ux3FoudGAXJlzo/dy/6e68lxun6LpDQjW/MyXbeoPpi5v9oT3gerSEeu2P2DehepaierNLU/xqv8dLqLX3ku+dUL3JIbrtrUzpviiImVBfjZrQ3q/v1bIrU7Yoz2y0+zC3uyDh9srDHXYOptVKbzP/MkWbsiir/HxzbDS9SdUYbEL91j1hhzE0WZtWy97mjym4D/3CND1OKEeRsNm7BxN2uXqy2sX7ar4+BX/Q+Y93qTKhvq5tGpRQ7Uyjn+asSC8Tnl5ESaiX7qZhCW0/kvc2W/O5rXeMktDt+4YmtBfmYzmXaZuHTZzQxjxU9zA0Ybo3je7Uh/3QYuKESzvhPFWOfmhCe+oW78XJbDF1Qjuj0p/l4Q8ZLYxt5Q6otdQwecJyulJMToIJV2/3dYHJ+6oMuP9hqJs+YTlLfJZNl8zafLO+s2VRIwvUcJueNKG6rx3uJQk3jYbF4acKbtPTJrSDtO30Rk34HKrgNj1xwrJnyGePYyT8ayssAndqrempE6qNPaBzzz5Cwl1Z4/DDgURKqGb2gK5bEs6TBn9HmemK+rS3JlbC4iHLd9FXKGHnlaksoWRl2DqliZdQzWWKpY/roQntislOS1sHjHgJVXKqXlsDEspwf0rtc5vWQT9iQpWeRklYfeIm095jS/WYCZW6GSFhIusV8xxDnmGswvXjJlTH4Qnl6a8sKOytGB74Iycs55N9E8oKvxgFZTLxFfxt7ITF2N5z9SRDfeWxRT2yf4cRE9qe0JfwYeXhnBw71FcvSrm5QwN//ISy1Oj3zFvGVOfhaNI+8P9CQnOl9Uood7H7YCv4wqbadNyE+ZuGPgkbr2CELEA/vAP/ryQ8LzV6JLTnqvnsUAYh796mS5g3/BrYOqv1fV3eAdde9FbdfppNntfD0vQU/1aQ5kJbMzd7Gtao07I377bW4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi+weKWyShch6n0QAAAABJRU5ErkJggg=="
        />
        <Card.ImgOverlay>
          <Card.Title>{data.creator}</Card.Title>
          <Card.Text>Last updated {d}</Card.Text>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>#All_tags: {data.tags}</Card.Text>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.message}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-around">
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
            </svg>{" "}
            Like
          </Button>

          <Button variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>{" "}
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
