import React from "react";

const cards = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <div className="logo-img">
            <img src={props.image} alt="" />
          </div>
          <div className="save-btn">
            <p>Save</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bookmark-icon lucide-bookmark"
            >
              <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
            </svg>
          </div>
        </div>
        <div className="center">
          <div className="company">
            <div className="c-name">{props.company}</div>
            <div className="joining">
              <p>{props.join_timing} </p>
            </div>
          </div>
          <h3 className="position">{props.jobrole}</h3>
          <div className="tags">
            <div className="tag">{props.hobbies[0]} </div>
            <div className="tag">{props.hobbies[1]}</div>
          </div>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="salary">{props.salary}</div>
            <div className="location">{props.location} </div>
          </div>
          <div className="apply-button">apply now</div>
        </div>
      </div>
    </>
  );
};

export default cards;
