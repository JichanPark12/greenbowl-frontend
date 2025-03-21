/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useEffect, useRef} from "react";
import {
    AiRecipeRequestPayload,
    RecipeOptions,
    UsedIngredient,
} from "@/app/(with-layout)/(no-header)/recipe/ai/_source//config";
import {GET} from "@/app/(with-layout)/(no-header)/recipe/ai/_source/actions/recipe";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

interface Props {
    usedIngredients: UsedIngredient[];
    recipeName: string | undefined;
    cookingTime: number | undefined;
    calories: number | undefined;
    recipeIntroduction: string;
    setRecipeIntroduction: React.Dispatch<React.SetStateAction<string>>;
    isStreaming: boolean;
    setIsStreaming: React.Dispatch<React.SetStateAction<boolean>>;
    isBookmarkedRecipe: boolean;
    setIsBookmarkedRequest: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecipeStreaming = ({
                             usedIngredients,
                             recipeName,
                             cookingTime,
                             calories,
                             recipeIntroduction,
                             setRecipeIntroduction,
                             isStreaming,
                             setIsStreaming,
                             isBookmarkedRecipe,
                             setIsBookmarkedRequest
                         }: Props) => {
    const abortControllerRef = useRef<AbortController | null>(null);

    const usedIngredientNames = usedIngredients.map(
        (usedIngredient) => usedIngredient.name
    );
    const usedIngredientWeights = usedIngredients.map(
        (usedIngredient) => usedIngredient.weight + "g"
    );
    const recipeOptions: RecipeOptions = {
        name: [recipeName],
        usedIngredientNames: usedIngredientNames,
        usedIngredientWeights: usedIngredientWeights,
        cookingTime: [cookingTime + "분"],
        calories: [calories + "kcal"],
    };

    const fetchRecipe = async () => {
        const recipePayload: AiRecipeRequestPayload = {
            options: recipeOptions,
        };

        setRecipeIntroduction("");
        setIsStreaming(true);
        const controller = new AbortController();
        abortControllerRef.current = controller;

        console.log("레시피 스트리밍 요청 전송");
        console.log("payload: ", recipePayload);
        await GET({
            setRecipeIntroduction,
            setIsStreaming,
            controller,
            payload: recipePayload,
        });
    };

    useEffect(() => {
        if (!recipeName || usedIngredients.length === 0 || recipeIntroduction) {
            return;
        }

        fetchRecipe();
    }, [usedIngredients]);

    return (
        <div className="px-4 pt-3 bg-foundation-secondary">
            <h2 className="heading-s pb-2">레시피</h2>
            <div className="mt-2 space-y-3">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {(recipeIntroduction || "").replace(/\n/g, "\n\n").trim()}
                </ReactMarkdown>
                {isStreaming && <p className="text-gray-500"></p>}
            </div>
            {!isStreaming && (
                <div className="flex justify-center items-center mt-4">
                    <img
                        src="/image/line.png"
                        alt="다시 추천 받기"
                        className="w-80 mb-8 cursor-pointer"
                        onClick={() => {
                            if (isBookmarkedRecipe) {
                                setIsBookmarkedRequest(true);
                            }
                            fetchRecipe();
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default RecipeStreaming;
