<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Post;
use App\Repository\PostRepository;
use Illuminate\Support\Collection;

class PostService
{
    /**
     * @var PostRepository
     */
    protected PostRepository $postRepository;

    /**
     * @param PostRepository $postRepository
     */
    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    /**
     * @return Collection
     */
    public function getAll(): Collection
    {
        return $this->postRepository->all();
    }

    /**
     * @param array $data
     * @return Post
     */
    public function create(array $data): Post
    {
        return $this->postRepository->create($data);
    }

    /**
     * @param array $data
     * @param Post $post
     * @return bool
     */
    public function update(array $data, Post $post): bool
    {
        return $this->postRepository->update($data, $post);
    }

    /**
     * @param Post $post
     * @return void
     */
    public function delete(Post $post): void
    {
        $this->postRepository->delete($post);
    }
}
