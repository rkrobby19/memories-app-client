import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Post({ data }) {
  const date = new Date(data.createdAt);
  const d = date.toDateString();

  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-4">
        {/* TODO: change card img src based on data */}
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
          {/* TODO: render all array element */}
          <Card.Text>#All_tags: {data.tags}</Card.Text>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.message}</Card.Text>
        </Card.Body>
        <Card.Body className="d-flex justify-content-around">
          <Button variant="primary" onClick={() => alert("Like Clicked")}>
            <i className="fa-solid fa-thumbs-up"></i> Like
          </Button>

          <Button variant="danger" onClick={() => alert("Delete Clicked")}>
            <i className="fa-solid fa-trash"></i> Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
