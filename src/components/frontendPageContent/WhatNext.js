/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";

const WhatNext = () => {
  return (
    <ResourceSection id="what-next">
      <ResourceSectionHeading>What Next?</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Pat yourself on the back for making it this far. Do continue to
          practice your skills, build more projects, and apply for jobs. If you
          plan on becoming a FullStack Developer, then check out our{" "}
          <Link to="/backend" className="paragraph-links">
            Backend Development Roadmap
          </Link>
          .{" "}
        </p>

        <p>
          Feel free to tweet a thank you to us at{" "}
          <a
            className="paragraph-links"
            href="http://twitter.com/techroadmap__"
            target="_blank">
            @techroadmap__
          </a>{" "}
          on twitter and if you have any questions or comments, feel free to
          send us a dm too or email us at{" "}
          <a
            className="paragraph-links"
            href="mailto:techcareerroadmap@gmail.com"
            target="_blank">
            techcareerroadmap@gmail.com
          </a>
          . Don't forget to give us a Star on our{" "}
          <a
            className="paragraph-links"
            href="http://github.com/Timonwa/techroadmap"
            target="_blank">
            GitHub repo
          </a>!
        </p>

        <p>Happy Coding!</p>
      </ResourceSectionBody>
    </ResourceSection>
  );
};

export default WhatNext;
