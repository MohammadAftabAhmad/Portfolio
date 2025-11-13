import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import img1 from "../../assets/images/project/kf1.png";
import img2 from "../../assets/images/project/kf2.png";
import img3 from "../../assets/images/project/kf3.png";
import img4 from "../../assets/images/project/kf4.png";
import img5 from "../../assets/images/project/kf5.png";
import img6 from "../../assets/images/project/kf6.png";
import img7 from "../../assets/images/project/kf7.png";
import img8 from "../../assets/images/project/kf8.png";
import img9 from "../../assets/images/project/kf9.png";
import img10 from "../../assets/images/project/kf10.png";

import zietx1 from "../../assets/images/project/zietx1.png";
import zietx2 from "../../assets/images/project/zietx2.png";
import zietx3 from "../../assets/images/project/zietx3.png";
import zietx4 from "../../assets/images/project/zietx4.png";
import zietx5 from "../../assets/images/project/zietx5.png";
import zietx6 from "../../assets/images/project/zietx6.png";
import zietx7 from "../../assets/images/project/zietx7.png";
import zietx8 from "../../assets/images/project/zietx8.png";
import zietx9 from "../../assets/images/project/zietx9.png";
import zietx10 from "../../assets/images/project/zietx10.png";
import zietx11 from "../../assets/images/project/zietx11.png";
import zietx12 from "../../assets/images/project/zietx12.png";
import zietx13 from "../../assets/images/project/zietx13.png";
import zietx14 from "../../assets/images/project/zietx14.png";
import zietx15 from "../../assets/images/project/zietx15.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  features: string[];
  link: string;
}

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
}

const initialState: ProjectState = {
  projects: [
    {
      id: 1,
      title: "ZIETX",
      description: ` ZietX is a E-Commerce Watches website is 
    designed to provide a stylish and seamless shopping 
    experience for watch enthusiasts.It features a curated
    collection of premium and affordable timepieces,
    intuitive navigation, high-quality visuals, and smooth
    cart and checkout functionality — all built with a 
    modern, responsive design. 
  `,
      images: [
        zietx1,
        zietx2,
        zietx3,
        zietx4,
        zietx5,
        zietx6,
        zietx7,
        zietx8,
        zietx9,
        zietx10,
        zietx11,
        zietx12,
        zietx13,
        zietx14,
        zietx15,
      ],
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "User registration/login",
        "Add favorites",
        "Leave reviews",
        "Dark mode",
        "Responsive design",
      ],
      link: "https://kfoodies.netlify.app/",
    },

    {
      id: 2,
      title: "K-FOODIES",
      description: `KFoodies is a modern,responsive food blogging website that shares inspiring food stories, recipes,
         and culinary experiences from around the world.Along with insightful blogs and stunning visuals,KFoodies 
         proudly hosts its annual Tabemono Food Fest is a celebration of global flavors and food culturethat brings 
         food enthusiasts together every year`,
      images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      features: [
        "User registration/login",
        "Add favorites",
        "Leave reviews",
        "Dark mode",
        "Responsive design",
      ],
      link: "https://kfoodies.netlify.app/",
    },
    // Add more projects here...
  ],
  selectedProject: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    selectProject(state, action: PayloadAction<number>) {
      const found = state.projects.find((p) => p.id === action.payload);
      state.selectedProject = found || null;
    },
  },
});

export const { selectProject } = projectSlice.actions;
export default projectSlice.reducer;
