<?php
/**
 * Created by PhpStorm.
 * User: mario
 * Date: 5/24/17
 * Time: 11:57 AM
 */

namespace Statamic\Addons\StatamicCampaign;


use GuzzleHttp\ClientInterface;

class ActiveCampaignClient
{
    private $client;

    public function __construct(ClientInterface $client)
    {
        $this->client = $client;
    }
}