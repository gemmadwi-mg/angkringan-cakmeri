"use client";

import Footer from "@/components/Footer";
import HeaderMenu from "@/components/HeaderMenu";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
    {
        image: "/menu/tusukan/usus.png",
        category: "Sundukan",
        name: "Usus",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/ampelaati.png",
        category: "Sundukan",
        name: "Ampela Ati",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/sayapkepala.png",
        category: "Sundukan",
        name: "Sayap Kepala Ayam",
        description:
            "Rp. 5000",
    },
    {
        image: "/menu/tusukan/ceker.png",
        category: "Sundukan",
        name: "Ceker",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/telurpuyuh.png",
        category: "Sundukan",
        name: "Telur Puyuh",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/scallop.png",
        category: "Sundukan",
        name: "Scallop",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/sosiskecil.png",
        category: "Sundukan",
        name: "Sosis Kecil",
        description:
            "Rp. 2500",
    },
    {
        image: "/menu/tusukan/sosisbesar.png",
        category: "Sundukan",
        name: "Sosis Besar",
        description:
            "Rp. 5000",
    },
    {
        image: "/menu/tusukan/cikua.png",
        category: "Sundukan",
        name: "Cikua",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/dumpling.png",
        category: "Sundukan",
        name: "Dumpling",
        description:
            "Rp. 3000",
    },
    {
        image: "/menu/tusukan/pentolbesar.png",
        category: "Sundukan",
        name: "Pentol Besar",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/tahubacem.png",
        category: "Sundukan",
        name: "Tahu Bacem",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/tusukan/tempebacem.png",
        category: "Sundukan",
        name: "Tempe Bacem",
        description:
            "Rp. 2000",
    },
    {
        image: "/menu/nasi/nasibakarcumi.png",
        category: "Nasi",
        name: "Nasi Bakar Cumi",
        description:
            "Rp. 6000",
    },
    {
        image: "/menu/nasi/nasikucing.png",
        category: "Nasi",
        name: "Nasi Kucing",
        description:
            "Rp. 3000",
    },
    {
        image: "/menu/nasi/nasibakarayamsuwir.png",
        category: "Nasi",
        name: "Nasi Bakar Ayam Suwir",
        description:
            "Rp. 6000",
    },
    {
        image: "/menu/minuman/estehjumbo.png",
        category: "Minuman",
        name: "Es Teh Jumbo",
        description:
            "Rp. 3000",
    },
    {
        image: "/menu/minuman/wedanguwuh.png",
        category: "Minuman",
        name: "Wedang Uwuh",
        description:
            "Rp. 5000",
    },
    {
        image: "/menu/minuman/kopihitam.png",
        category: "Minuman",
        name: "Kopi Hitam",
        description:
            "Rp. 3000",
    },
    {
        image: "/menu/minuman/susujahe.png",
        category: "Minuman",
        name: "Susu Jahe",
        description:
            "Rp. 4000",
    },
    {
        image: "/menu/minuman/whitecoffe.png",
        category: "Minuman",
        name: "White Coffe",
        description:
            "Rp. 4000",
    },
    {
        image: "/menu/minuman/susuputih.png",
        category: "Minuman",
        name: "Susu Putih",
        description:
            "Rp. 3000",
    },
    {
        image: "/menu/minuman/nutrisari.png",
        category: "Minuman",
        name: "Nutrisari",
        description:
            "Rp. 3500",
    },
    {
        image: "/menu/minuman/teajus.png",
        category: "Minuman",
        name: "Tea Juice",
        description:
            "Rp. 3000",
    },



];

const uniqueCategories = [
    "all menu",
    ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all menu");

    const filteredProjects = projectData.filter((project) => {
        return category === "all menu"
            ? project
            : project.category === category;
    });

    return (
        <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
            <HeaderMenu />
            
            <section
                className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[150px] py-40 pb-32 xl:py-0"
                id="home"
            >

            </section>
            <section className="min-h-screen pt-12 bg-white">
                <div className="container mx-auto">
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                        Menu Angkringan Cak Meri
                    </h2>
                    {/* tabs */}
                    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                        <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border">
                            {categories.map((category, index) => {
                                return (
                                    <TabsTrigger
                                        onClick={() => setCategory(category)}
                                        value={category}
                                        key={index}
                                        className="capitalize w-[162px] md:w-auto"
                                    >
                                        {category}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
                            {filteredProjects.map((project, index) => {
                                return (
                                    <TabsContent value={category} key={index}>
                                        <ProjectCard project={project} />
                                    </TabsContent>
                                );
                            })}
                        </div>
                    </Tabs>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Projects;
