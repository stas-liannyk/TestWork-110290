<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Post\StoreOrUpdatePostRequest;
use App\Http\Resources\PostAllResource;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    /**
     * @var PostService
     */
    private PostService $postService;

    /**
     * @param PostService $postService
     */
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return getSuccessResponse(['posts' => PostAllResource::collection($this->postService->getAll())]);
    }

    /**
     * @param Post $post
     * @return JsonResponse
     */
    public function show(Post $post): JsonResponse
    {
        return getSuccessResponse(['post' => $post]);
    }

    /**
     * @param StoreOrUpdatePostRequest $request
     * @return JsonResponse
     */
    public function store(StoreOrUpdatePostRequest $request): JsonResponse
    {
        $this->postService->create($request->validated());

        return getSuccessResponse();
    }

    /**
     * @param StoreOrUpdatePostRequest $request
     * @param Post $post
     * @return JsonResponse
     */
    public function update(StoreOrUpdatePostRequest $request, Post $post): JsonResponse
    {
        $this->postService->update($request->validated(), $post);

        return getSuccessResponse();
    }

    /**
     * @param Post $post
     * @return JsonResponse
     */
    public function destroy(Post $post): JsonResponse
    {
        $this->postService->delete($post);

        return getSuccessResponse();
    }
}
