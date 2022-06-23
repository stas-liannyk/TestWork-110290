<?php

declare(strict_types = 1);

namespace App\Repository;

use App\Models\Post;
use Illuminate\Support\Collection;

class PostRepository
{
    /**
     * @return Collection
     */
    public function all(): Collection
    {
        return Post::all();
    }

    /**
     * @param array $data
     * @return Post
     */
    public function create(array $data): Post
    {
        return Post::create($data);
    }

    /**
     * @param array $data
     * @param Post $post
     * @return bool
     */
    public function update(array $data, Post $post): bool
    {
        return $post->update($data);
    }

    /**
     * @param Post $post
     * @return void
     */
    public function delete(Post $post): void
    {
        $post->delete();
    }
}
